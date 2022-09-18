#!/bin/bash

# export PGPASSWORD="${process.env.PGPASSWORD}";

export PGPASSWORD="pass2020";

database="monstersdb"

# This script is used to configure the environment for the build process.
echo "Configuring the database: $database"

dropdb -U node_user monstersdb
createdb -U node_user monstersdb

psql -U node_user monstersdb < ./bin/sql/monsters.sql

echo "Database configured: $database"




