# SPDX-License-Identifier: ISC

FROM node:20.8.0-alpine3.18

RUN mkdir /prototype-pollution-mitigations
WORKDIR /prototype-pollution-mitigations

COPY --chown=node:node package.json package-lock.json ./
RUN npm install --no-audit --no-fund --no-update-notifier

COPY --chown=node:node ./ ./

ENTRYPOINT ["/bin/sh"]
