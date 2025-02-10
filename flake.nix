{
  description = "Dev env for kjkent.dev - Astro + React + TypeScript";

  inputs = {
    nixpkgs = {
      url = "github:nixos/nixpkgs/nixos-unstable";
    };
  };

  outputs = {nixpkgs, ...}: let
    pkgs = import nixpkgs {
      config.allowUnfree = true;
      system = "x86_64-linux";
    };
  in {
    devShells.${pkgs.system}.default = pkgs.mkShell {
      nativeBuildInputs = with pkgs; [
        alejandra
        git
        jq
        nixd
        nodejs_22
        pnpm
      ];

      shellHook = ''
        echo -e "\nInstalling package.json dependencies"
        (pnpm install) > /dev/null

        echo "Adding node_modules executables to path"
        export PATH="$PATH:$PWD/node_modules/.bin"

        # pnpm commands from package.json
        ${builtins.concatStringsSep "\n" (map 
          (i: ''alias ${i}="pnpm run ${i}"'')
          ["build" "deploy" "dev" "lint" "up"]
        )}

        v_astro="$(astro --version | sed -n 's/   astro  v//p')"
        v_node="$(node --version | sed -n 's/v//p')"
        v_pnpm="$(pnpm --version)"

        echo "
        🚀 Development environment initialized!

        Project: $(jq -r .name package.json)
          Runtime:             Node.js $v_node
          Framework:           Astro   $v_astro
          Package Manager:     pnpm    $v_pnpm

        Commands:
          lint      Check and fix lint errors (Biome)
          up        Update Astro and pnpm dependencies
          dev       Start dev server (Wrangler)
          build     Create build without deploying
          deploy    Build and deploy (CloudFlare Pages)
        "
      '';
    };
  };
}
