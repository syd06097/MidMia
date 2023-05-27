# Generated by Django 4.2.1 on 2023-05-26 22:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('summoners', '0003_alter_summoner_icon_url'),
    ]

    operations = [
        migrations.AlterField(
            model_name='summoner',
            name='icon_url',
            field=models.URLField(),
        ),
        migrations.AlterField(
            model_name='summoner',
            name='lp',
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name='summoner',
            name='rank',
            field=models.IntegerField(),
        ),
    ]
