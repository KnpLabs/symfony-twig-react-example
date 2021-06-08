.PHONY: generate-certificates
generate-certificates:
	mkdir certs
	mkcert -cert-file certs/local-cert.pem -key-file certs/local-key.pem "app.localhost" "*.app.localhost" "domain.local" "*.domain.local"
