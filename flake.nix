{
  description = "Development environment for kjkent.dev - Astro + React + TypeScript";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { nixpkgs, flake-utils, ... }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs {
          inherit system;
          config.allowUnfree = true;
        };

        # Accepts e.g., "20", "latest"
        nodeVersion = "22";

        devTools = with pkgs; [
          pkgs."nodejs_${nodeVersion}"
          biome
          nodePackages.pnpm
          nodePackages.wrangler
          nodePackages.typescript-language-server
          nodePackages.typescript
        ];
      in
      {
        formatter = pkgs.nixpkgs-fmt;
        devShells.default = pkgs.mkShell rec {
          name = "kjkent-dev-env";
          shell = "zsh";
          packages = devTools;
          buildInputs = with pkgs; [
            git
            pkgs."${shell}"
          ];

          shellHook = ''
            clear
            echo "🚀 Development environment initialized!"
            echo ""
            echo "Project: kjkent.dev"
            echo ""
            echo "Node.js: $(node --version)"
            echo "pnpm: $(pnpm --version)"
            echo "TypeScript: $(tsc --version)"
            echo ""
            echo "Available commands:"
            echo "- pnpm install    : Install dependencies"
            echo "- pnpm dev        : Start development server"
            echo "- pnpm build      : Build for production"
            echo "- pnpm preview    : Preview production build"
            echo "- pnpm deploy     : Deploy to Cloudflare Pages"

            exec ${shell}
          '';
        };
      }
    );
}
