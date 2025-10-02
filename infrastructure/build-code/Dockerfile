FROM alpine:latest
LABEL MAINTAINER="Madhu Akula" INFO="Kubernetes Goat"

COPY app-arm64.tar.gz /app-arm64.tar.gz
COPY app.tar.gz /app.tar.gz

RUN apk --no-cache add git py3-pip \
    && pip install truffleHog; \
    if [ `uname -m` = "aarch64" ]; then \
    	tar -xvzf app-arm64.tar.gz -C / ; \
    else \
    	tar -xvzf app.tar.gz -C / ; \
    fi; \
    rm /app.tar.gz /app-arm64.tar.gz

EXPOSE 3000

WORKDIR /app/

CMD ["./app"]

# ================ ARNICA SECURITY ANNOTATION BLOCK START ================
LABEL org.opencontainers.image.source="https://github.com/Jaswanti-gitgoat/Harvest"
LABEL org.opencontainers.image.path="infrastructure/build-code/Dockerfile"
# These automated labels, added by the security team, enhance traceability and security.
# For more details, see: https://docs.arnica.io/arnica-documentation/developers/adding-oci-tags-to-docker-images.
# To exclude this file, please replace this change with: #arnica-ignore followed by the dismissal reason.
# ================ ARNICA SECURITY ANNOTATION BLOCK END ================
