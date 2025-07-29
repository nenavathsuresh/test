from flask import Flask, request, jsonify
import openai
from flask_cors import CORS
app = Flask("ChatBot")
CORS(app)
@app.route("/suresh", methods=["POST"])
def myCode():
    try:
        # Get the text (question) from the request
        question = request.json.get("question")

        if not question:
            return jsonify({"error": "Missing 'question' field in the request"}), 400

        # Your OpenAI processing code here
        openai.api_key = "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"
        openai.organization = "org-SolO4GKGWAyRvr4mwvLWvsCJ"
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "user", "content": question},
            ]
        )
        answer = response["choices"][0]["message"]["content"]

        # Construct a JSON response
        response_data = {
            "message": "Question processed successfully",
            "answer": answer
        }

        return jsonify(response_data)
    except Exception as e:
        return str(e), 500

if __name__ == "__main__":
    app.run()
