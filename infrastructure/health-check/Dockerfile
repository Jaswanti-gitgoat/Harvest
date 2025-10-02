FROM golang:buster
LABEL MAINTAINER="Madhu Akula" INFO="Kubernetes Goat"

WORKDIR /

COPY views /views
COPY go.mod /go.mod
COPY go.sum /go.sum
COPY main.go /main.go


RUN apt update && apt install curl wget iputils-ping -y
RUN go build -o /

EXPOSE 80

CMD ["/health-check"]

# ================ ARNICA SECURITY ANNOTATION BLOCK START ================
LABEL org.opencontainers.image.source="https://github.com/Jaswanti-gitgoat/Harvest"
LABEL org.opencontainers.image.path="infrastructure/health-check/Dockerfile"
# These automated labels, added by the security team, enhance traceability and security.
# For more details, see: https://docs.arnica.io/arnica-documentation/developers/adding-oci-tags-to-docker-images.
# To exclude this file, please replace this change with: #arnica-ignore followed by the dismissal reason.
# ================ ARNICA SECURITY ANNOTATION BLOCK END ================
