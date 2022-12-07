from flask import Flask, request, jsonify
from discord_webhook import DiscordWebhook, DiscordEmbed
import os
from flask_cors import cross_origin
WEBHOOK = os.environ.get("DISCORD_WEBHOOK")
app = Flask(__name__)

@app.route('/', methods=["GET","POST","OPTIONS"])
@cross_origin()
def index():
    if request.method == "POST":
        args = request.json
    else:
        args = request.args
    name = args.get("name")
    email = args.get("email")
    message = args.get("message")
    InvokeWebhook(name, email, message)
    response = jsonify({"success": 1})
    #response.headers.add("Access-Control-Allow-Origin", "*")
    return response

def InvokeWebhook(name, email, message):
    webhook = DiscordWebhook(url=WEBHOOK)
    embed = DiscordEmbed(title='Contact Request', color='03b2f8')
    embed.set_footer(text='Contact2Discord 0.1')
    embed.set_timestamp()
    embed.add_embed_field(name='Sender', value=name)
    embed.add_embed_field(name='Email Address', value=email)
    embed.add_embed_field(name='Message', value=message, inline=False)
    webhook.add_embed(embed)
    response = webhook.execute()
    print(response)
app.run()