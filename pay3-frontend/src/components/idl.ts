export type UpiPaymentSystem = {
    "version": "0.1.0",
    "name": "upi_payment_system",
    "instructions": [
      {
        "name": "registerUser",
        "accounts": [
          {
            "name": "userAccount",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "user",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "upiId",
            "type": "string"
          }
        ]
      },
      {
        "name": "payUser",
        "accounts": [
          {
            "name": "userFrom",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "userTo",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "amount",
            "type": "u64"
          }
        ]
      }
    ],
    "accounts": [
      {
        "name": "userAccount",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "owner",
              "type": "publicKey"
            },
            {
              "name": "upiId",
              "type": "string"
            }
          ]
        }
      }
    ]
  };
  
  export const IDL: UpiPaymentSystem = {
    "version": "0.1.0",
    "name": "upi_payment_system",
    "instructions": [
      {
        "name": "registerUser",
        "accounts": [
          {
            "name": "userAccount",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "user",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "upiId",
            "type": "string"
          }
        ]
      },
      {
        "name": "payUser",
        "accounts": [
          {
            "name": "userFrom",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "userTo",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "amount",
            "type": "u64"
          }
        ]
      }
    ],
    "accounts": [
      {
        "name": "userAccount",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "owner",
              "type": "publicKey"
            },
            {
              "name": "upiId",
              "type": "string"
            }
          ]
        }
      }
    ]
  };
  