{
  description = "Dev env for kjkent.dev - Astro + React + TypeScript";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-24.11";
  };

  outputs = {nixpkgs, ...}: let
    shellPlatforms = [ "x86_64-linux" ];

    mkShellSpec = system: let
      pkgs = import nixpkgs {
        inherit system;
        config.allowUnfree = true;
      };
    in {
      default = pkgs.mkShell {
        name = "kjkent-dev-env";
        nativeBuildInputs = with pkgs; [
          nixd
          nixfmt-rfc-style
          git
          nodejs_22
          pnpm
        ];

        shellHook = ''
          pnpm install
          export PATH="$PATH:$PWD/node_modules/.bin"
          clear

          echo "🚀 Development environment initialized!"
          echo
          echo "Project: kjkent.dev"
          echo "$(astro --version)"
          echo "   node   $(node --version)"
          echo "   pnpm   $(pnpm --version)"
          echo "   tsc    $(tsc --version)"
          echo
          echo "Available commands:"
          echo "- pnpm i       : Install dependencies"
          echo "- pnpm dev     : Start dev server (wrangler)"
          echo "- pnpm build   : Create build without deploying"
          echo "- pnpm deploy  : Build and deploy to CloudFlare Pages"
          echo
          '';
      };
    };
  in with nixpkgs.lib; {
      devShells = genAttrs shellPlatforms mkShellSpec;
    };
}
