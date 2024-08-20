![Cover Image](portada-splitter.png)

Backend URL

```
https://server-y9uq.onrender.com
```

## Endpoints

### Users (/users)

- **POST** /

  - Crea un nuevo usuari.
  - Body: { id: string , email: string, username: string }

- **PATCH** /

  - Actualiza el nombre de usuari.
  - Body: { user_id: string, new_username: string }

- **GET** /:user_id

  - Obtiene la información de un usuari.
  - Params: user_id

- **GET** /identification/:user_identification
  - Obtiene la información de usuarios que contienen userIndentification como username o emai.
  - Params: user_identification

### Groups (/groups)

- **POST** /

  - Crea un nuevo grupo.
  - Body: { user_id: string, name: string, description: string }
  - Optional: description

- **POST** /members/:group_id/:user_id

  - Agrega un usuario con la propiedad pending=true a un grupo ya existente.

  - Params: user_id, group_id

- **PATCH** /members/:group_id/:user_id

  - Acepta la invitación a un grupo, cambiando el estado de groupmember a pending=false.
  - Params: user_id, group_id

- **DELETE** /members/:group_id/:user_id

  - Rechaza la invitación a un grupo, eliminando al integrante del grupo junto a pending=true.
  - Params: user_id, group_id

- **GET** /members/:group_id

  - Obtiene a los integrantes de un grupo.
  - Params: group_id

- **GET** /member/:user_id

  - Obtiene los grupos de un usuario.
  - Params: user_id

- **PATCH** /:group_id

  - Actualiza el nombre y la descripción de un grupo.
  - Params: group_id
  - Body: {admin_id, new_name, new_description}
  - Optional: new_description, new_name

- **PATCH** /:group_id/:user_id

  - Modifica el admin del grupo.
  - Params: group_id, user_id
  - Body: {new_admin_id}

- **DELETE** :group_id/:user_id

  - Elimina a un usuario de un grupo.
  - Params: group_id, user_id

### Expenses (/expenses)

- **POST** /:group_id

  - Crea un nuevo gasto.
  - Params: group_id
  - Body: { total_spent: float, category: String, currency: String, participants: Array<Hash> }
  - Array de participants: [ {"user_id": "id_user1", "spent": 100, "paid": 200}, ... ]

- **GET** /:group_id

  - Obtiene los gastos de un grupo .
  - Params: group_id

- **GET** /individual/:group_id

  - Obtiene los gastos individuales de un grupo .
  - Params: group_id

- **GET** /balance/:group_id

  - Obtiene los balances y el total adeudado de un grupo.
  - Params: group_id

- **GET** /options/categories

  - Obtiene las categorias a las que puede pertenecer un gasto .
  - Params: -

- **GET** /options/currencies

  - Obtiene las monedas en las que puede estar expresado un gasto.
  - Params: -

### Debts (/debts)

- **POST** /

  - Crea una nueva deuda cada vez que se agrega un usuario a un grupo.
  - Params: group_id, new_group_member

## Ejecución

```
docker-compose up --build
```
