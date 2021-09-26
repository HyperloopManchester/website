#!/bin/sh

REMOTE=webpi

sftp $REMOTE <<EOF
	put -fR out/* /var/www/hyperloopmanchester.com
EOF
