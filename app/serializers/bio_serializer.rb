class BioSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :description, :school, :occupation, :dating_preference
end
