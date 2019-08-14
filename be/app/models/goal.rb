class Goal < ApplicationRecord
  belongs_to :user
  belongs_to :partner, polymorphic: true, optional: true

  
end
