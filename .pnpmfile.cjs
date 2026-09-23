module.exports = {
  hooks: {
    readPackage(pkg) {
      if (pkg.dependencies && pkg.dependencies['toml']) {
        pkg.dependencies['toml'] = '4.2.0';
      }
      if (pkg.dependencies && pkg.dependencies['@opentelemetry/propagator-jaeger']) {
        pkg.dependencies['@opentelemetry/propagator-jaeger'] = '2.11.0';
      }
      if (pkg.dependencies && pkg.dependencies['protobufjs']) {
        pkg.dependencies['protobufjs'] = '8.8.0';
      }
      return pkg;
    }
  }
}
