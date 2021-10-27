#!/bin/sh

REMOTE=hyperpi

sftp $REMOTE <<EOF
	put -fR out/* /var/www/hyperloop.ddns.net/
EOF
