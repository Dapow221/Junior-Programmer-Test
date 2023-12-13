## Endpoints

List of Available Endpoints:

- `GET /product`
- `GET /product/kategori`
- `GET /product/status`
- `GET /product/:id`
- `POST /product`
- `PUT /product/:id`
- `DELETE /product/:id`

### GET /product

#### Description

- Mendapatkan semua data product

#### Response

_200 - OK_

- Body
  ```json
  {
    "statusCode": 200,
    [
      {
        "id": Integer,
        "nama_produk": String (validation: Inputan nama harus diisi),
        "harga": Integer (validation: Harga harus diisi dan harus berupa angka),
        "kategori_id": Integer,
        "status_id": Integer,
        "createdAt": Date,
        "updatedAt": Date,
        "Kategori": {
            "id": Integer,
            "nama_kategori": String,
            "createdAt": Date,
            "updatedAt": Date
        },
        "Status": {
            "id": Integer,
            "nama_status": String,
            "createdAt": Date,
            "updatedAt": Date
        }
      },
    ]
  }
  ```

### GET /product/kategori

#### Description

- Mendapatkan semua data kategori

#### Response

_200 - OK_

- Body
  ```json
  {
    "statusCode": 200,
    [
      {
        "id": Integer,
        "nama_kategori": String,
        "createdAt": Date,
        "updatedAt": Date
      }
    ]
  }
  ```

### GET /product/status

#### Description

- Mendapatkan semua data kategori

#### Response

_200 - OK_

- Body
  ```json
  {
    "statusCode": 200,
    [
       {
        "id": Integer,
        "nama_status": String,
        "createdAt": Date,
        "updatedAt": Date
       }
    ]
  }
  ```

### GET /product/:id

#### Description

- Mendapatkan data detail product berdasarkan id product

#### Response

_200 - OK_

- Body
  ```json
  {
    "statusCode": 200,
    [
      {
        "id": Integer,
        "nama_produk": String (validation: Inputan nama harus diisi),
        "harga": Integer (validation: Harga harus diisi dan harus berupa angka),
        "kategori_id": Integer,
        "status_id": Integer,
        "createdAt": Date,
        "updatedAt": Date,
        "Kategori": {
            "id": Integer,
            "nama_kategori": String,
            "createdAt": Date,
            "updatedAt": Date
        },
        "Status": {
            "id": Integer,
            "nama_status": String,
            "createdAt": Date,
            "updatedAt": Date
        }
      },
    ]
  }
  ```

### POST /product

#### Description

- Menambahkan product baru

#### Request

- Body

```json
{
   "nama_produk": String (validation: Inputan nama harus diisi),
   "harga": Integer (validation: Harga harus diisi dan harus berupa angka),
   "kategori_id": Integer,
   "status_id": Integer

}
```

#### Response

_201 - Created_

- Body

  ```json
  {
    "message": String
  }
  ```

_500 - Internal Server Error_

- Body
  ```json
  {
    "statusCode": 500,
    "error": {
      "message": String
    }
  }
  ```

### PUT /product/:id

#### Description

- Edit data product berdasarkan id

#### Request

- Body

```json
{
   "nama_produk": String (validation: Inputan nama harus diisi),
   "harga": Integer (validation: Harga harus diisi dan harus berupa angka),
   "kategori_id": Integer,
   "status_id": Integer

}
```

#### Response

_201 - Created_

- Body

  ```json
  {
    "message": String
  }
  ```

_500 - Internal Server Error_

- Body
  ```json
  {
    "statusCode": 500,
    "error": {
      "message": String
    }
  }
  ```

### DELETE /product/:id

#### Description

- Menghapus data product berdasarkan id

#### Response

_200 - OK_

- Body

  ```json
  {
    "statusCode": 200,
    "message": String
  }
  ```

_500 - Internal Server Error_

- Body
  ```json
  {
    "statusCode": 500,
    "error": {
      "message": String
    }
  }
  ```
