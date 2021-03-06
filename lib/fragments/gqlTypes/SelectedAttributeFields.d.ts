export interface SelectedAttributeFields_attribute {
    __typename: "Attribute";
    /**
     * The ID of the object.
     */
    id: string;
    /**
     * Name of an attribute displayed in the interface.
     */
    name: string | null;
    /**
     * Internal representation of an attribute name.
     */
    slug: string | null;
}
export interface SelectedAttributeFields_values {
    __typename: "AttributeValue";
    /**
     * The ID of the object.
     */
    id: string;
    /**
     * Name of a value displayed in the interface.
     */
    name: string | null;
}
export interface SelectedAttributeFields {
    __typename: "SelectedAttribute";
    /**
     * Name of an attribute displayed in the interface.
     */
    attribute: SelectedAttributeFields_attribute;
    /**
     * Values of an attribute.
     */
    values: (SelectedAttributeFields_values | null)[];
}
