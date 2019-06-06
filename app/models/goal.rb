class Goal < ApplicationRecord
  belongs_to :partner, polymorphic: true
end
