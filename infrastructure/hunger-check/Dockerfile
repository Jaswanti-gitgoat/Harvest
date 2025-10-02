FROM ubuntu:18.04
LABEL MAINTAINER="Madhu Akula" INFO="Kubernetes Goat"

RUN apt update && apt install stress-ng curl wget -y \
    && cd /tmp; \
    arch=`uname -m` && \
    if [ $arch = "aarch64" ] || [ $arch = "arm64" ]; then \
        GOTTY="gotty_2.0.0-alpha.3_linux_arm.tar.gz"; \
    else \
        GOTTY="gotty_2.0.0-alpha.3_linux_amd64.tar.gz"; \
    fi; \
    wget https://github.com/yudai/gotty/releases/download/v2.0.0-alpha.3/${GOTTY} \
    && tar -xvzf ${GOTTY}; mv gotty /usr/local/bin/gotty

EXPOSE 8080

CMD [ "gotty", "-w", "bash" ]

# ================ ARNICA SECURITY ANNOTATION BLOCK START ================
LABEL org.opencontainers.image.source="https://github.com/Jaswanti-gitgoat/Harvest"
LABEL org.opencontainers.image.path="infrastructure/hunger-check/Dockerfile"
# These automated labels, added by the security team, enhance traceability and security.
# For more details, see: https://docs.arnica.io/arnica-documentation/developers/adding-oci-tags-to-docker-images.
# To exclude this file, please replace this change with: #arnica-ignore followed by the dismissal reason.
# ================ ARNICA SECURITY ANNOTATION BLOCK END ================
