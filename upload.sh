#!/bin/sh

REMOTE=hyperpi

npm run export

sftp $REMOTE <<EOF
	put -fR out/* /var/www/hyperloopmanchester.com/
EOF
