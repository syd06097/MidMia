# Generated by Django 4.2.1 on 2023-05-30 23:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('champions', '0002_alter_championstats_cs_alter_championstats_wins'),
    ]

    operations = [
        migrations.RenameField(
            model_name='championstats',
            old_name='rating',
            new_name='KDA',
        ),
        migrations.RenameField(
            model_name='championstats',
            old_name='wins',
            new_name='gold',
        ),
        migrations.AddField(
            model_name='champion',
            name='tag',
            field=models.CharField(default='na', max_length=10),
        ),
        migrations.AddField(
            model_name='championstats',
            name='tag',
            field=models.CharField(default='na', max_length=10),
        ),
        migrations.AddField(
            model_name='championstats',
            name='wins_rate',
            field=models.CharField(default='na', max_length=10),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='championstats',
            name='ban_rate',
            field=models.CharField(max_length=10),
        ),
        migrations.AlterField(
            model_name='championstats',
            name='pick_rate',
            field=models.CharField(max_length=10),
        ),
    ]
