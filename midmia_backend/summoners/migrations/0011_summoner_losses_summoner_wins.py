# Generated by Django 4.2.1 on 2023-06-19 22:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('summoners', '0010_alter_summoner_lp'),
    ]

    operations = [
        migrations.AddField(
            model_name='summoner',
            name='losses',
            field=models.IntegerField(null=True),
        ),
        migrations.AddField(
            model_name='summoner',
            name='wins',
            field=models.IntegerField(null=True),
        ),
    ]
