# Generated by Django 4.2.1 on 2023-05-26 23:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('summoners', '0004_alter_summoner_icon_url_alter_summoner_lp_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='summoner',
            name='name',
            field=models.CharField(max_length=100, unique=True),
        ),
    ]
