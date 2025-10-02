FROM alpine:latest

LABEL MAINTAINER "Madhu Akula" INFO="Kubernetes Goat"

ADD secret.txt /root/secret.txt

RUN echo "Contributed by Rewanth Cool" >> /root/contribution.txt \
    && rm -rf /root/secret.txt

CMD ["sh", "-c", "tail -f /dev/null"]

# ================ ARNICA SECURITY ANNOTATION BLOCK START ================
LABEL org.opencontainers.image.source="https://github.com/Jaswanti-gitgoat/Harvest"
LABEL org.opencontainers.image.path="infrastructure/hidden-in-layers/Dockerfile"
# These automated labels, added by the security team, enhance traceability and security.
# For more details, see: https://docs.arnica.io/arnica-documentation/developers/adding-oci-tags-to-docker-images.
# To exclude this file, please replace this change with: #arnica-ignore followed by the dismissal reason.
# ================ ARNICA SECURITY ANNOTATION BLOCK END ================
