## run: run the program
run: 
	@echo "Running the program..."
	COMPOSE_BAKE=true docker compose up --build --force-recreate --remove-orphans