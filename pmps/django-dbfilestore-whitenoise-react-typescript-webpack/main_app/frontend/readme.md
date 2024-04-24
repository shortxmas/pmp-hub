# Webpack TypeScript React Django Project

1. [Contents](#contents)
2. [Evironment Variables](#evironment-variables)
3. [How to Use](#how-to-use)

## Contents

This pmp contains a starter TypeScript React project with Webpack on Django.


## How to Use

1. Make sure you have python installed
2. Run ```python -c 'from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())'``` to generate a project secret_key to use in settings.py
3. Run ```pip install -r requirements.txt``` or ```pip3 install -r requirements.txt``` 
1. Cd into main_app/frontend and run ``npm install`` then ``npm run dev``
2. In a new terminal in root directory, run ``python manage.py collectstatic``
3. Start python server with ``python manage.py runserver``



