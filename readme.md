## Participants : 
Garpard martin
Leo Meynier
Samir Foul
Alxis Contamin

## Setup :

Créer un .env avec:

DB_SERVER=nom_du_conteneur_de_la_db
DB_PORT=3306
DB_USER=user
DB_PASSWORD=password
DB_ROOT_PASSWORD=password
DB_NAME=papeterie
VOLUME_DB=./
APP_AUTHORITY=http://keycloak:8080/realms/webapp
APP_CLIENTID=client-papeterie
APP_SWAGGERAUTHORITY=http://localhost:1100/auth/realms/webapp
KEYCLOAK_ADMIN=admin
KEYCLOAK_ADMIN_PASSWORD=admin

Setup keycloak:
    - créer un realm webapp
    - créer un client client-papeterie
    - créer un audience mapper
    - créer des rôles (client, provider)