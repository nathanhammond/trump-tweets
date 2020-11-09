node 1_generate_script.js > 2_download_tweets.sh
chmod +x 2_download_tweets.sh
./2_download_tweets.sh
rm ./2_download_tweets.sh

cat ./data/*.json | jq -r '.data[].referenced_tweets | select(.!=null)[].id' > referenced.txt

REFERENCE_COUNT=1
function recurse {
  ./download.sh `paste -d, -s referenced.txt` | jq > "./data/reference$REFERENCE_COUNT.json"
  cat "./data/reference$REFERENCE_COUNT.json" | jq -r '.data[].referenced_tweets | select(.!=null)[].id' > referenced.txt
  REFERENCE_COUNT=$((REFERENCE_COUNT + 1))

  if [ -s referenced.txt ]
  then
    echo "loading next"
    recurse
  else
    echo "no more data"
    rm referenced.txt
  fi
}

recurse