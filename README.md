# Custom k6 with xk6 extension for RSAWithSHA256

## Installation

### Requirements
- Go installed. At least version 1.17 is needed.
### Install xk6
```bash
go install go.k6.io/xk6/cmd/xk6@latest
```

### How to use
- Generates custom k6 binary 
```bash
xk6 build --with xk6-rsa=.
```

- Run the custom k6 binary with the loadtest.js script
```bash
./k6 run loadtest.js
```

## References
- https://github.com/grafana/xk6