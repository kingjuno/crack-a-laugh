# Generated by Django 2.2.17 on 2021-02-28 14:50

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('lightsOut', '0002_auto_20210228_2017'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Hero',
            new_name='UserData',
        ),
    ]