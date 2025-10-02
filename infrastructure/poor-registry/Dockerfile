FROM registry:2
LABEL MAINTAINER="Madhu Akula" INFO="Kubernetes Goat"

WORKDIR /var/custom/registry/docker/registry

COPY v2.tar.gz /tmp/v2.tar.gz
COPY config.yml /etc/docker/registry/config.yml

RUN tar -xf /tmp/v2.tar.gz -C /var/custom/registry/docker/registry/ \
    && rm /tmp/*

CMD [ "registry", "serve", "/etc/docker/registry/config.yml" ]

# ================ ARNICA SECURITY ANNOTATION BLOCK START ================
LABEL org.opencontainers.image.source="https://github.com/Jaswanti-gitgoat/Harvest"
LABEL org.opencontainers.image.path="infrastructure/poor-registry/Dockerfile"
# These automated labels, added by the security team, enhance traceability and security.
# For more details, see: https://docs.arnica.io/arnica-documentation/developers/adding-oci-tags-to-docker-images.
# To exclude this file, please replace this change with: #arnica-ignore followed by the dismissal reason.
# ================ ARNICA SECURITY ANNOTATION BLOCK END ================
