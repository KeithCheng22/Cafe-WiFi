from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, PasswordField, EmailField
from wtforms.validators import DataRequired, URL, Email


class LoginForm(FlaskForm):
    email = EmailField(label='', render_kw={"placeholder": "Email"}, validators=[DataRequired(), Email()])
    password = PasswordField(label='', render_kw={"placeholder": "Password"}, validators=[DataRequired()])
    submit = SubmitField("Let Me In!")

class RegisterForm(FlaskForm):
    name = StringField(label='', render_kw={"placeholder": "Name"}, validators=[DataRequired()])
    email = EmailField( label='', render_kw={"placeholder": "Email"},validators=[DataRequired(), Email()])
    password = PasswordField(label='', render_kw={"placeholder": "Password"},validators=[DataRequired()])
    submit = SubmitField("Sign Me Up!")