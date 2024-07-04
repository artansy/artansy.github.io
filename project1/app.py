from flask import Flask, jsonify
import sqlite3
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

DATABASE = 'database.db'

def get_db():
    conn = sqlite3.connect(DATABASE)
    conn.row_factory = sqlite3.Row
    return conn

@app.route('/api/graduates', methods=['GET'])
def get_graduates():
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute("""
        SELECT g.full_name, g.specialty, g.graduation_date, dt.type as document_type, 
               g.document_series, g.document_number, g.supervisor, g.hours, g.document_file
        FROM graduates g
        JOIN document_types dt ON g.document_type = dt.id
    """)
    graduates = [dict(row) for row in cursor.fetchall()]
    return jsonify(graduates)

if __name__ == '__main__':
    app.run(debug=True)