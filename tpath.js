module.exports = {
  "type": "flow",
  "nodes": [
    {
      "id": "Template",
      "title": "Template",
      "ns": "template",
      "name": "string"
    },
    {
      "id": "JSONPath",
      "title": "JSONPath",
      "ns": "json",
      "name": "path"
    }
  ],
  "links": [
    {
      "source": {
        "id": "Template",
        "port": "out"
      },
      "target": {
        "id": "JSONPath",
        "port": "path"
      },
      "metadata": {
        "title": "Template out -> path JSONPath"
      }
    }
  ],
  "title": "JSON Path Template",
  "description": "JSON Path using a templated path",
  "ports": {
    "input": {
      "template": {
        "nodeId": "Template",
        "title": "Template",
        "name": "template"
      },
      "vars": {
        "nodeId": "Template",
        "title": "Vars",
        "name": "in"
      },
      "in": {
        "nodeId": "JSONPath",
        "title": "In",
        "name": "in"
      }
    },
    "output": {
      "out": {
        "nodeId": "JSONPath",
        "title": "Out",
        "name": "out"
      }
    }
  },
  "providers": {
    "@": {
      "url": "https://serve-chix.rhcloud.com/nodes/{ns}/{name}"
    }
  },
  "ns": "json",
  "name": "tpath"
}