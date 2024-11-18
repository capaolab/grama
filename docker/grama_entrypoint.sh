#!/bin/sh
npx prisma generate && npx prisma db push --accept-data-loss 
exec "$@"