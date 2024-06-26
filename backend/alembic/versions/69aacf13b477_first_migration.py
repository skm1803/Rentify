"""first migration

Revision ID: 69aacf13b477
Revises: 
Create Date: 2024-05-25 07:22:39.912140

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '69aacf13b477'
down_revision: Union[str, None] = None
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('buyers',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('first_name', sa.String(), nullable=True),
    sa.Column('last_name', sa.String(), nullable=True),
    sa.Column('email', sa.String(), nullable=True),
    sa.Column('password', sa.String(), nullable=True),
    sa.Column('phone_number', sa.String(), nullable=True),
    sa.Column('created_at', sa.DateTime(), nullable=True),
    sa.Column('updated_at', sa.DateTime(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_buyers_email'), 'buyers', ['email'], unique=True)
    op.create_index(op.f('ix_buyers_id'), 'buyers', ['id'], unique=False)
    op.create_index(op.f('ix_buyers_phone_number'), 'buyers', ['phone_number'], unique=False)
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_index(op.f('ix_buyers_phone_number'), table_name='buyers')
    op.drop_index(op.f('ix_buyers_id'), table_name='buyers')
    op.drop_index(op.f('ix_buyers_email'), table_name='buyers')
    op.drop_table('buyers')
    # ### end Alembic commands ###
