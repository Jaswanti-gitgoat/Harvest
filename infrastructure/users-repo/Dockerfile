FROM python:alpine
LABEL MAINTAINER="Madhu Akula" INFO="Kubernetes Goat"

ENV API_KEY="k8s-goat-cf658c56a501385205cc6d2dafee8fc1"

COPY app.py /app.py

CMD [ "python", "/app.py" ]

# ================ ARNICA SECURITY ANNOTATION BLOCK START ================
LABEL org.opencontainers.image.source="https://github.com/Jaswanti-gitgoat/Harvest"
LABEL org.opencontainers.image.path="infrastructure/users-repo/Dockerfile"
# These automated labels, added by the security team, enhance traceability and security.
# For more details, see: https://docs.arnica.io/arnica-documentation/developers/adding-oci-tags-to-docker-images.
# To exclude this file, please replace this change with: #arnica-ignore followed by the dismissal reason.
# ================ ARNICA SECURITY ANNOTATION BLOCK END ================
