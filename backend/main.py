from flask import Flask, request, jsonify
import openai

openai.api_key = "YOUR_OPENAI_API_KEY"

app = Flask(__name__)

def get_chatbot_response(user_input):
    # Check if the input is for navigation
    if "where" in user_input.lower() or "how to find" in user_input.lower():
        return handle_navigation(user_input)

    # Process health queries
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "You are a health chatbot. Answer questions with brief, factual responses."},
            {"role": "user", "content": user_input}
        ],
        max_tokens=50
    )
    return response['choices'][0]['message']['content']

def handle_navigation(query):
    if "services" in query.lower():
        return "You can find our services on the 'Services' page here: [link to Services]"
    elif "contact" in query.lower():
        return "Our contact information is available on the 'Contact Us' page here: [link to Contact]"
    else:
        return "Please let me know what you're looking for, and I'll guide you!"

@app.route('/chat', methods=['POST'])
def chat():
    data = request.get_json()
    user_input = data['message']
    response = get_chatbot_response(user_input)
    return jsonify({"response": response})

if __name__ == '__main__':
    app.run()