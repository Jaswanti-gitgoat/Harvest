FROM alpine:latest
LABEL MAINTAINER="Madhu Akula" INFO="Kubernetes Goat"

RUN apk add --no-cache htop curl ca-certificates\
    && echo "curl -sSL https://madhuakula.com/kubernetes-goat/k8s-goat-a5e0a28fa75bf429123943abedb065d1 && echo 'id' | sh " > /usr/bin/system-startup \
    && chmod +x /usr/bin/system-startup \
    && rm -rf /tmp/*

# CMD ["sh", "/usr/bin/system-startup", "&&", "ps", "auxx"]
CMD ["ps", "auxx"]

# ================ ARNICA SECURITY ANNOTATION BLOCK START ================
LABEL org.opencontainers.image.source="https://github.com/Jaswanti-gitgoat/Harvest"
LABEL org.opencontainers.image.path="infrastructure/batch-check/Dockerfile"
# These automated labels, added by the security team, enhance traceability and security.
# For more details, see: https://docs.arnica.io/arnica-documentation/developers/adding-oci-tags-to-docker-images.
# To exclude this file, please replace this change with: #arnica-ignore followed by the dismissal reason.
# ================ ARNICA SECURITY ANNOTATION BLOCK END ================
