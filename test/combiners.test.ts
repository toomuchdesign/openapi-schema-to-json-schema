import convert from "../src";

it("allOf is null", async ({ expect }) => {
  const schema = {
    allOf: null,
  };

  const result = convert(schema);

  const expected = {
    $schema: "http://json-schema.org/draft-04/schema#",
  };

  expect(result).toEqual(expected);
});

it("anyOf is null", async ({ expect }) => {
  const schema = {
    anyOf: null,
  };

  const result = convert(schema);

  const expected = {
    $schema: "http://json-schema.org/draft-04/schema#",
  };

  expect(result).toEqual(expected);
});

it("oneOf is null", async ({ expect }) => {
  const schema = {
    oneOf: null,
  };

  const result = convert(schema);

  const expected = {
    $schema: "http://json-schema.org/draft-04/schema#",
  };

  expect(result).toEqual(expected);
});


it("allOf with nullable", async ({ expect }) => {
  const schema = {
    nullable: true,
    allOf: [
      {
        type: "object",
        required: ["foo"],
        properties: {
          foo: {
            type: "integer",
          },
        },
      },
    ],
  };

  const result = convert(schema);
  const expected = {
    $schema: "http://json-schema.org/draft-04/schema#",
    oneOf: [
      {
        type: "null",
      },
      {
        allOf: [
          {
            type: "object",
            required: ["foo"],
            properties: {
              foo: {
                type: "integer",
              },
            },
          },
        ],
      },
    ],
  };

  expect(result).toEqual(expected);
});