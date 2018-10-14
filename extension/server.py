from bs4 import BeautifulSoup
import requests
from flask import request, Flask, jsonify
import pickle

def process(url):
	html = requests.get(url).text
	soup = BeautifulSoup(html, "html.parser")
	imgs = soup.find_all("img")
	src = []
	for tmp in imgs:
		try:
			src.append(tmp["src"])
		except:
			continue

	return src

def save_pic(lst):
	pickle.dump(lst, open("pic.pkl", "wb"), protocol=pickle.HIGHEST_PROTOCOL)

def get_pic():
	data = pickle.load(open("pic.pkl", "rb"))
	return data

app = Flask(__name__)

@app.route('/', methods=["POST"])
def service():
	html = request.json["html"]

	output = []
	print(type(html))
	if type(html) != "str":
		save_pic(html)
	else:
		if html == "PIC":
			output = get_pic()
		else:
			try:
				output = process(html)
			except:
				output = []

	print(output)
	return jsonify(output)

app.run("0.0.0.0", port=1998)



# if __name__ == "__main__":
# 	URL = "https://tiki.vn"
# 	print(process(URL))