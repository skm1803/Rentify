"""004 add is_active property to property

Revision ID: db450ae6f6a4
Revises: 2bab66cacf54
Create Date: 2024-05-26 12:39:30.622674

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'db450ae6f6a4'
down_revision: Union[str, None] = '2bab66cacf54'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('properties', sa.Column('is_active', sa.Boolean(), nullable=True))
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('properties', 'is_active')
    # ### end Alembic commands ###