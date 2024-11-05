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
					nodePackages.pnpm
					nodePackages.wrangler
					nodePackages.typescript-language-server
					nodePackages.typescript
				];
			in
			{
				formatter = pkgs.nixpkgs-fmt;
				devShells.default = pkgs.mkShell {
					name = "kjkent-dev-env";
					packages = devTools;
					buildInputs = with pkgs; [
						git
					];

					shellHook = ''
						export NPM_CONFIG_PREFIX=$PWD/.npm-global
						export PATH=$NPM_CONFIG_PREFIX/bin:$PATH
						
						if [ ! -f .npmrc ]; then
							echo "Creating .npmrc configuration..."
							cat > .npmrc <<-'EOL'
								node-linker=hoisted
								shamefully-hoist=true
								store-dir=$PWD/.pnpm-store
							EOL
						fi

						pnpm env use --global ${nodeVersion}

						echo "🚀 Development environment initialized!"
						echo "Project: kjkent.dev"
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
					'';
				};
			}
		);
}