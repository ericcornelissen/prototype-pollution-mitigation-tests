#!/bin/sh
# SPDX-License-Identifier: ISC

CONTAINER_NAME="prototype-pollution-mitigations"
CONTAINER_TAG="$CONTAINER_NAME-img"

if command -v docker >/dev/null 2>/dev/null; then
	CONTAINER_ENGINE="docker"
elif command -v podman >/dev/null 2>/dev/null; then
	CONTAINER_ENGINE="podman"
else
	echo "No supported container engine found"
	exit 1
fi

$CONTAINER_ENGINE build \
	--tag $CONTAINER_TAG \
	--file "Containerfile" \
	.

$CONTAINER_ENGINE run -it \
		--rm \
		--mount "type=bind,source=$PWD,target=/prototype-pollution-mitigations" \
		--name $CONTAINER_NAME \
		$CONTAINER_TAG
