#!/bin/sh

REMOTE=hyperpi

sftp $REMOTE <<EOF
	put -fR out/* /var/www/hyperloopmanchester.com/
EOF
