import requests

url = "https://gmailnator.p.rapidapi.com/generate-email"

payload = { "options": [1, 2, 3] }
headers = {
	"content-type": "application/json",
	"X-RapidAPI-Key": "0ea0d06bb2msh9a9e9216f20b903p168a39jsn9a30cbb49336",
	"X-RapidAPI-Host": "gmailnator.p.rapidapi.com"
}

response = requests.post(url, json=payload, headers=headers)

print(response.json())
