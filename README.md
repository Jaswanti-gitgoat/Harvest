# Kubernetes Goat

[![Netlify Status](https://api.netlify.com/api/v1/badges/e5399be3-9c47-4557-b237-9e6c89f6cada/deploy-status)](https://app.netlify.com/sites/kubernetes-goat/deploys)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/madhuakula/kubernetes-goat/blob/master/LICENSE)
[![GitHub release](https://img.shields.io/github/release/madhuakula/kubernetes-goat.svg)](https://github.com/madhuakula/kubernetes-goat/releases/latest)
[![Github Stars](https://img.shields.io/github/stars/madhuakula/kubernetes-goat)](https://github.com/madhuakula/kubernetes-goat/stargazers)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/madhuakula/kubernetes-goat/pulls)
[![Twitter](https://img.shields.io/twitter/url?url=https://github.com/madhuakula/kubernetes-goat)](https://twitter.com/intent/tweet/?text=Kubernetes%20Goat,%20an%20intentionally%20vulnerable%20by%20design%20training%20platform%20to%20learn%20%23Kubernetes%20Security%20by%20%40madhuakula.%20Check%20it%20out%20&url=https://github.com/madhuakula/kubernetes-goat)

The Kubernetes Goat designed to be intentionally vulnerable cluster environment to learn and practice Kubernetes security.

**Refer to [https://madhuakula.com/kubernetes-goat](https://madhuakula.com/kubernetes-goat) for the guide.**

<p align="center">
  <img width="300" height="300" src="./kubernetes-goat-logo.png" alt="Kubernetes-Goat logo">
</p>

## 🎲 Just click and Play in browser for free using Katacoda Playground - [Try now]((https://katacoda.com/madhuakula/scenarios/kubernetes-goat))

[![Katacoda Playground Kubernetes Goat](./kubernetes-goat-katacoda.png)](https://katacoda.com/madhuakula/scenarios/kubernetes-goat)

[https://katacoda.com/madhuakula/scenarios/kubernetes-goat](https://katacoda.com/madhuakula/scenarios/kubernetes-goat)

## ⚙️ Setting up Kubernetes Goat

* Before we setup the Kubernetes Goat, ensure that you have created and admin access to the Kubernetes cluster

```bash
kubectl version --short
```

* Setup the helm version 2 in path as `helm2`. Refer to helm [releases](https://github.com/helm/helm/releases) for more information about setup

```bash
helm2 --help
```

* Then finally setup Kubernetes Goat by running the following command

```bash
git clone https://github.com/madhuakula/kubernetes-goat.git
cd kubernetes-goat
bash setup-kubernetes-goat.sh
```

* To export the ports/services locally to start learning, run the following command

```bash
bash access-kubernetes-goat.sh
```

## 🏁 Scenarios

1. Sensitive keys in code bases
2. DIND(docker-in-docker) exploitation
3. SSRF in K8S world
4. Container escape to access host system
5. Docker CIS Benchmarks analysis
6. Kubernetes CIS Benchmarks analysis
7. Attacking private registry
8. NodePort exposed services
9. Helm v2 tiller to PwN the cluster
10. Analysing crypto miner container
11. Kubernetes Namespaces bypass
12. Gaining environment information
13. DoS the memory/cpu resources
14. Hacker Container preview

![Kubernetes Goat Home](./kubernetes-goat-home.png)

## ❤️ Showcase

* Featured in the official Kubernetes Podcast at [https://kubernetespodcast.com/episode/109-kubermatic](https://kubernetespodcast.com/episode/109-kubermatic/)
* Featured in tl;dr sec [https://tldrsec.com/blog/tldr-sec-039](https://tldrsec.com/blog/tldr-sec-039/)
* Featured in CloudSecList [https://cloudseclist.com/issues/issue-42](https://cloudseclist.com/issues/issue-42/)

## ⚠️ Disclaimer

> Kubernetes Goat creates intentionally vulnerable resources into your cluster. DO NOT deploy Kubernetes Goat in a production environment or alongside any sensitive cluster resources.

> Kubernetes Goat comes with absolutely no warranties whatsoever. By using Kubernetes Goat, you take full responsibility for any and all outcomes that result.

## ✨ Contributors

Thanks goes to these wonderful people 🎉

<table><tr><td align="center"><a href="https://github.com/madhuakula"><img alt="madhuakula" src="https://avatars1.githubusercontent.com/u/6764192?v=4" width="117" /><br />madhuakula</a></td><td align="center"><a href="https://github.com/wurstbrot"><img alt="wurstbrot" src="https://avatars2.githubusercontent.com/u/955192?v=4" width="117" /><br />wurstbrot</a></td><td align="center"><a href="https://github.com/podjackel"><img alt="podjackel" src="https://avatars3.githubusercontent.com/u/5067183?v=4" width="117" /><br />podjackel</a></td></tr></table>
