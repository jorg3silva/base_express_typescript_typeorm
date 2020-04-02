module.exports = {
   "type": "mysql",
   "host": "192.168.140.157",
   "port": "3306",
   "username": "testing",
   "password": "Z3nt4#.",
   "database":  "zentapay",
   "synchronize": false,
   "logging": false,
   "entities": [
      "src/entity/**/*.ts"
   ],
   "migrations": [
      "src/migration/**/*.ts"
   ],
   "subscribers": [
      "src/subscriber/**/*.ts"
   ],
   "cli": {
      "entitiesDir": "src/entity",
      "migrationsDir": "src/db/migration",
      "subscribersDir": "src/subscriber"
   }
};

