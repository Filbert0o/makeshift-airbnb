class Host < ActiveRecord::Base
  validates :name, presence: true
  validates :email, presence: true
  validates :address, presence: true
end
