---
title: "Python Port Scanner"
slug: port-scanner
category: security
description: "This project is a lightweight Python-based port scanner, built with the socket module, to demonstrate a practical use of the module when programming custom tools. I used this project as a means to strengthen my networking knowledge and networking programming skill set."
tags:
  - Python
  - Ethical Hacking
  - Networking
  - Cybersecurity
link: "#"
github: "/projects/port-scanner/port-scanner.png"
date: "2025-8-10"
coverImage: ""
coverAlt: "Thumbnail Image for the project"
---

## Project Overview

This project is a lightweight Python-based port scanner, built with the socket module, to demonstrate a practical use of the module when programming custom tools. I used this project as a means to strengthen my networking knowledge and networking programming skill set.

### What I Used

* **Language:** Python.
* **Framework/Library:** Sockets.
* **Tools:** git, VS Code, ChatGPT (For the idea and debugging help).

### Key Challenges

Firstly, one of the issues I encountered was a timeout error. This was caused by me using the `timeout()` method, due to a misread of the socket modules documentation, instead of the correct method which was `setimeout()`. I came about this fix by implementing into the code error handling with try/except statements, and discovering using AI that I used the wrong method for setting a timeout.

Secondly, another problem which I encountered was figuring out how to check the status of the port. For this I took a break away from the programming and found a youtube video which does this and used it to teach me the method `connect_ex`, which takes a IP address and port as a argument and returns a status code based on the connections status (0 for open, 1 for closed).

Thirdly, the final problem I had was the performance of the program. This is was because I had originally had the program scanning all the ports on a network. I fixed this by only having the program scan the first 1000 ports on the target network.

### Project Outcome

I successfully built the Python-based port scanner which I set out to do at the start. I also incorporated different features into it like scanning the most used ports on a network; scanning a full range of ports;  and providing real time results to the project.

## Usage Instructions

### 1. Starting the Program

- Clone the repository from GitHub.
- Navigate to the folder where the “port_scanner” is stored in the terminal.
- Run this command to start the program

```bash
python3 port_scanner.py
```

### 2. Choosing a Scan Type

- Option 1: This option scans the most commonly used ports (e.g. 21 for FTP, 22 for SSH, 80 for HTTP).
- Option 2: This option performs a full scan across the predefined range of ports for a deeper look at the target system.

### 3. Entering the Target

- You’ll then be prompted to enter the target machine’s IP address (for example, 127.0.0.1)
- The scanner then attempts to connect to each specified port on that IP address.

### 4. Viewing the Results

- The results are then displayed in real time as the scan progresses.
- This means you’ll quickly see which ports are available for communication and which are blocked.

### 5. Practical Takeaway

- The scanner gives immediate insight into the network surface of the target.
- This is not meant to replace professional tools like Nmap but serves as a hands-on learning project that demonstrates how port scanning works under the hood.