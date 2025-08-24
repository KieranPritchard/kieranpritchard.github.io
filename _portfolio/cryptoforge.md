---
layout: portfolio_post
title: "Cryptoforge"
description: "An overview of my Python-based cryptography utility, Cryptoforge, built with the cryptography library. The project provides a command-line interface for encryption, decryption, hashing, and digital signatures, with simplified commands compared to OpenSSL. It highlights my learning in key management, algorithm implementation, and secure data handling, while reinforcing practical skills in Python and applied cryptography."
date: 2025-8-10
featured: false
topics: ["Cryptography", "Programming"]
header_image: "/res/Header-Images/project-header-images/Cryptoforge_Header_Image.webp"
icon: "/res/Icons/portfolio-icons/Cryptoforge_Icon.webp"
breadcrumb: ["Cryptoforge"]
---

## Overview
Cryptoforge is a command-line cryptography toolkit built in Python. It brings together encryption, decryption, hashing, and digital signature algorithms into one accessible utility. Designed with simplicity in mind, it streamlines cryptographic operations that often feel complex in tools like OpenSSL. 
The project helped me dive deeper into cryptography fundamentals, key management, and the practical use of secure algorithms. It also gave me hands-on experience in building a command-line tool with clean, reusable commands.

### What I Used
* Python 3 for development
* cryptography library for cryptographic primitives
* argparse for command-line interface design

### Challenges
One of the main hurdles was managing keys efficiently and avoiding repetitive command inputs. I solved this by adding a feature where the last loaded key is automatically reused for subsequent operations. This improved usability and reduced command overhead compared to raw OpenSSL workflows.

### Result
The final tool provides a full suite of cryptographic operations, including:

* Encryption & Decryption (AES, Blowfish, ChaCha20)
* Hashing (SHA-2, SHA-3, Blake2)
* Key Management (save, load, rename, delete keys)
* Digital Signatures (RSA, ECDSA)

It serves as a versatile sandbox for experimenting with cryptography and a practical utility for lightweight secure data processing.

## How It Works

### 1. Key Management

* Save, load, list, rename, and delete cryptographic keys.
* Supports AES, Blowfish, ChaCha20, RSA, and ECC/EDSCA keys.
* The tool remembers the last loaded key for easier workflows.

### 2. Encryption & Decryption

* Encrypt/decrypt both files and plaintext strings.
* Choose from AES (with IV), Blowfish, or ChaCha20 (with nonce).
* Output can be saved to a file or displayed directly in the terminal.

### 3. Hashing

* Compute secure hashes using SHA-2, SHA-3, or Blake2.
* Flexible output formats (hex or raw bytes).
* Works with both text input and files.

### 4. Digital Signatures
* Generate and verify RSA or ECDSA signatures.
* Use PEM private/public keys for signing or verification.
* Verification accepts either a public key or a private key (with public key derived automatically).

## Workflow Example
* Load an AES key → Encrypt a file → Hash the encrypted output → Sign the hash with RSA.
* All steps are performed via simple commands, reducing complexity compared to OpenSSL.

### Example Commands
* **Load a key:** python Cryptoforge.py keymgmt --load-key my_aes_key.key
* **Encrypt a file using AES:** python Cryptoforge.py aes --operation encrypt --input plaintext.txt --iv <iv-hex>
* **Hash a file with SHA-3:** python Cryptoforge.py sha300 --input document.txt --hash-type sha3_256
* **Sign a message with RSA:** python Cryptoforge.py rsa_signature --operation sign --input message.txt --key private.pem --output message.sig
* **Verify a signature:** python Cryptoforge.py rsa_signature --operation verify --input message.txt --key private.pem --signature message.sig

### Key Features

* Supports AES, Blowfish, ChaCha20, SHA-2, SHA-3, Blake2, RSA, and ECDSA
* Full key management system for easier cryptographic workflows
* Reusable key-loading mechanism to reduce repetitive commands
* Unified command-line syntax powered by argparse

⚠️ Disclaimer: Cryptoforge is an educational project and not intended for production-level security.